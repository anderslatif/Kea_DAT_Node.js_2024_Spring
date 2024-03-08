import { fakerEN_IN } from "@faker-js/faker";


export default async function getMatches(numberOfMatches=5) {
    const promises = [];
    for (let i = 0; i <= numberOfMatches; i++) {
        const promise = fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json());
        promises.push(promise);
    }
    const results = await Promise.all(promises);
    const matches = results.map((match) => ({ ...match, ...getIndianProfile() }));
    return matches;
}

function getIndianProfile() {
    return {
        name: fakerEN_IN.person.fullName(),
        bio: fakerEN_IN.person.bio(),
        streetAddress: fakerEN_IN.location.streetAddress(),
        city: fakerEN_IN.location.city()
    };
}
