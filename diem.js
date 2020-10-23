function tinhdiem() {
    let diemToan = Number(document.getElementById("toan").value)
    let diemVan = Number(document.getElementById("van").value)
    let diemAnh = Number(document.getElementById("anh").value)
    let khuVuc = document.getElementById("khuvuc").value
    switch (khuVuc) {
        case "KV1":
            let tongDiemkv1 = diemToan + diemVan + diemAnh + 0.75
            document.getElementById("hienthi").innerText = "Điểm thi ĐH của bạn là " + tongDiemkv1
            break
        case "KV2":
            let tongDiemkv2 = diemToan + diemVan + diemAnh + 0.25
            document.getElementById("hienthi").innerText = "Điểm thi ĐH của bạn là " + tongDiemkv2
            break
        case "KV2-NT":
            let tongDiemkv2nt = diemToan + diemVan + diemAnh + 0.5
            document.getElementById("hienthi").innerText = "Điểm thi ĐH của bạn là " + tongDiemkv2nt
            break
        case "KV3":
            let tongDiem = diemToan + diemVan + diemAnh
            document.getElementById("hienthi").innerText = "Điểm thi ĐH của bạn là " + tongDiem
    }
}