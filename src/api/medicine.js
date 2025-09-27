import request from "@/utils/request"

export const getMedcinePage = (currentPage , pageSize) => {
    return request.get("/medicine/pageMedicine" , {
        params: {
            PageNumber: currentPage,
            PageSize: pageSize
          }
    })
}