import writeHome from "../pages/homePage.js";
import writeUsers from "../pages/usersPage.js";
import handleUserData from "../helpers/handleUserData.js";


const users = ["User 1", "User 2", "User 3"];

export default function requestHandler(req, res) {
    let url = req.url;
    let method = req.method;

    if (url === '/') {
        writeHome(res);
        return res.end();
    }

    if (url === '/users') {
        writeUsers(res, users);
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        handleUserData(req, users);
        res.statusCode = 302;
        res.setHeader('Location', '/users');
        res.end()
    }
}