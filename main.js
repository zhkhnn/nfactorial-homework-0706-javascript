// rest
export function info(OWNER, ADMIN, ...services) {
    console.log('owner', OWNER)
    console.log('admin', ADMIN)
    console.log('services', services)
}


//array
export let services = [
    'manicure',
    'pedicure',
    'makiyazh',
    'brovi',
    'hairstilist',
];


const ADDRESS = "Satpaeva 22"

export default function getAddress() {
    console.log(ADDRESS);
}