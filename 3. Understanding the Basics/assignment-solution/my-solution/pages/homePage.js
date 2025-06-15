export default function writeHome(res) {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<body>')
        res.write('<h1>Welcome to the Home Page</h1>')
        res.write('<br>')
        res.write('<form action="/create-user" method="POST">')
        res.write('<input type="text" name="username">')
        res.write('<button type="submit">Send</button>')
        res.write('</form>')
        res.write('<br>')
        res.write('<a href="/users">View Users</a>')
        res.write('</body>')
        res.write('</html>')
}