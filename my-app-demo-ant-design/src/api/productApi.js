import axiosClient from "./axiosClient";

/**
 * Lớp xử lý các hàm gọi đến API của sản phẩm
 * @author DVHUNG1 (11/03/2021)
 */
class ProductApi {
    constructor() {
        this.urlPrefix = "/product";
    }

    /**
     * Call api lất tất cả loại sản phẩm
     * @param {object} params Đối tượng chứa param
     * @returns {Array} danh sách tất cả các sản phẩm
     * @author DVHUNG1 (11/03/2021)
     */
    getAll(params) {
        return axiosClient.get(this.urlPrefix, { params });
    }
}

const productApi = new ProductApi();
export default productApi;
