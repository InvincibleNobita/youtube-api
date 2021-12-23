

const searchData = async (req, res) => {
    try {

        const data = await MOne.find().lean()
        res.render("dashboard", { title: "Dashboard", users: data })

    }catch(err) {
        console.log(err)
    }

}
module.exports = searchData