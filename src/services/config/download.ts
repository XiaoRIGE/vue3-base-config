import service from "./axios";

/**
 * @description 文件下载
 * @param method 请求类型
 * @param url 请求地址
 * @param data 请求参数
 * @param fileName 文件名（如果不传就取后端返回的content-disposition）
 * @param downloadType 文件类型 支持xlsx和zip
 * @returns
 */
export default function exportFile(
  method: any,
  url: string,
  data?: object,
  fileName?: string,
  downloadType = "xlsx",
) {
  return new Promise((resolve, reject) => {
    service({
      method,
      url,
      data,
      params: data,
      responseType: "blob",
    })
      .then((res) => {
        let typeStr;
        if (downloadType === "xlsx") {
          typeStr =
            "application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        } else if (downloadType === "zip") {
          typeStr = "application/zip";
        }

        const blob = new Blob([res.data], {
          type: typeStr,
        });
        const elink = document.createElement("a");
        if (fileName) {
          elink.download = fileName;
        } else {
          elink.download = decodeURI(
            res.headers["content-disposition"].split(";")[1].split("=")[1],
          );
        }
        elink.style.display = "none";
        elink.href = URL.createObjectURL(blob);
        document.body.appendChild(elink);
        elink.click();
        document.body.removeChild(elink);
        resolve(res.data);
      })
      .catch((err) => {
        console.log("导出失败", err);
        reject(err);
      });
  });
}
