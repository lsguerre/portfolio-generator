const fs = require('fs')

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if theres an error, reject the promise and send error
        if(err) {
            reject(err)
            //return out of the function so it doesnt accidentally execute to resolve
        return
        }
        resolve({
            ok: true,
            message: 'File created!'
        })
    })
  })
}

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if(err) {
                reject(err)
                return
            }
            resolve({
                ok: true,
                message: 'Stylesheet created!'
            })
        })

    })
}

module.exports = { writeFile, copyFile }