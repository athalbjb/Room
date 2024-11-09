// api/meeting/[id].ts

export async function handler(req: Request) {
  const { id } = req.query;

  try {
    const data = await fetch(`https://external-api.com/meeting/${id}`);
    const meetingData = await data.json();
    
    return new Response(JSON.stringify(meetingData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching meeting data:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
