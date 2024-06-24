export async function POST(request) {
    try {
        const data = await request.json();
        const TOKEN = "6735435635:AAGV_xDBi8d0NZiAJbvnJ7jpNbvOxBFzz18";
        const CHAT_ID = "-4228242392";
        const text = `
Имя: ${data.firstName} %0A
Номер: ${data.mobileNumber} %0A
Дополнительная информация: ${data.more} %0A
        `;

        const response = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`);
        const result = await response.json();

        if (response.ok) {
            return new Response(JSON.stringify({ result: 'OK' }), { status: 200 });
        } else {
            console.error("Ошибка при отправке сообщения в Telegram", result);
            return new Response(JSON.stringify({ result: 'Error', message: result.description }), { status: 500 });
        }
    } catch (error) {
        console.error("Ошибка при обработке запроса", error);
        return new Response(JSON.stringify({ result: 'Error', message: error.message }), { status: 500 });
    }
}
