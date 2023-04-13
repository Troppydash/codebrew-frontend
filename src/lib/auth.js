import React from "react";

// CONSTANT
const BASE_URL = 'localhost:3030';

export const AuthContext = React.createContext(null);

export async function authLogin(details) {
    // // mock
    // return '';
    // details: {username, password}
    let response;

    try {
        response = await fetch(
            `${BASE_URL}/user/login`,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(details)
            }
        );
    } catch (err) {
        throw "[fetch error] " + err.toString().toLowerCase();
    }

    if (!response.ok) {
        throw "[response error]" + response.status;
    }

    const json = await response.json();
    return json.jwt;

}

export async function authPost(
    path,  // url
    body,  // post data
) {
    let response;
    try {
        response = await fetch(
            `${BASE_URL}${path}`,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: body
            }
        );
    } catch (err) {
        throw "[fetch error] " + err.toString().toLowerCase();
    }

    if (!response.ok) {
        // unauthenticated, return null
        if (response.status === 401) {
            return null;
        }
        throw "[response error]" + response.status;
    }

    return await response.json();
}