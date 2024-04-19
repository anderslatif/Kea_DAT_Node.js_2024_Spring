export function fetchGet(url) {
    return fetch(url,
        {
            credentials: "include"
        })
        .then((response) => response.json())
        .then((result) => result)
        .catch((error) => console.error(error));
}

export function fetchPost(url, body) {
    return fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.error(error));
}