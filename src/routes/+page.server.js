export async function load({ url, params }) {
    const memberMeResponse = await fetch ("https://fdnd.directus.app/items/person/155");
    const memberData = await memberMeResponse.json();

    return {memberMe: memberData.data};
}

