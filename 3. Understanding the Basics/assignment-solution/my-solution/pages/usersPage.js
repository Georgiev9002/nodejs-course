export default function writeUsers(res, users) {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<body>')
        res.write('<ul>')
        for (let user of users) {
            res.write(`<li>${user}</li>`)
        }
        res.write('</ul>')
        res.write('<br>')
        res.write('<a href="/">Go to Home</a>')
        res.write('</body>')
        res.write('</html>')
}