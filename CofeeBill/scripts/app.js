function addProduct() {
    let product = document.getElementsByTagName('input')[0].value
    let price = document.getElementsByTagName('input')[1].value
    let productList = document.getElementById('product-list')

    if (product && +price > 0) {
        let totalSum = document.querySelector('tfoot')
            .getElementsByTagName('tr')[0]
            .getElementsByTagName('td')[1]

        let productTd = document.createElement('td')
        let priceTd = document.createElement('td')
        let tr = document.createElement('tr')

        productTd.textContent = product
        priceTd.textContent = price

        tr.appendChild(productTd)
        tr.appendChild(priceTd)
        productList.appendChild(tr)

        let convertSum = + totalSum.textContent
        convertSum += +price
        totalSum.textContent = +convertSum
    }
    document.getElementsByTagName('input')[0].value = ''
    document.getElementsByTagName('input')[1].value = ''
}