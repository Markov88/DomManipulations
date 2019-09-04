function solve (num) {
    let count = 1
    let x = 1
    const result = []

    while (count) {
        count *= 0.1
        x = num * count
        result.push(+x | 0)
        if (result.includes(0)) return (console.log(result.length) && count === false)
    }
}

solve(123456789)