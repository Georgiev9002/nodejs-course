
export default function handleUserData(req, users) {
    const body = [];
    req.on('data', chunk => {
        body.push(chunk);
    });

    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const username = parsedBody.split('=')[1];
        users.push(username);
    });
}