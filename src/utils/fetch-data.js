export default function fetchData(url, params, method = 'get') {
    return fetch(url, {
            method: method,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: params ? JSON.stringify(params) : null
        })
        .then((response) => {
            return response.json()
        });
}
