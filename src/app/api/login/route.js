export async function POST(req) {
    const { username, password } = await req.json();
  
    // Static demo credentials
    const demoUser = {
      username: 'nandu',
      password: '1234',
    };
  
    if (username === demoUser.username && password === demoUser.password) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 });
    }
  }
  