function tinhdiem() {
    let diemToan = Number(document.getElementById("toan").value)
    let diemVan = Number(document.getElementById("van").value)
    let diemAnh = Number(document.getElementById("anh").value)
    let tongDiem = diemToan + diemVan + diemAnh
    let khuVuc = document.getElementById("khuvuc").value
    switch (khuVuc) {
        case KV1:
            document.getElementById("hienthi").innerText = "Điểm thi ĐH khối D của bạn là " + tongDiem + 0.75
        break
        case KV2:
        }
}