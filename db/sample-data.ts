// import { hashSync } from 'bcrypt-ts-edge';
const sampleData = {
    // users: [
    //     {
    //         name: 'Admin',
    //         email: 'admin1@admin.com',
    //         password: hashSync('', 10),
    //         role: 'admin',
    //     },
    //     {
    //         name: 'User',
    //         email: 'user1@user.com',
    //         password: hashSync('', 10),
    //         role: 'user',
    //     },
    // ],
    products: [
        {
            name: "Sunset Overdrive",
            slug: "sunset-overdrive",
            category: "Abstract",
            description: "A mesmerizing blend of warm and cool colors capturing the essence of a sunset.",
            images: ["https://yjwavrdj2e.ufs.sh/f/XmUnwGwJael6KMh0EOeGulXeh59q7dS2KYMpIEzvjabn6UtH"],
            price: 299.99,
            artist: "Leonard McKinney",
            rating: 4.8,
            numReviews: 24,
            stock: 2,
            isFeatured: true,
            banner: "banner-abstract.jpg",
            dimensions: "24x36 inches",
            medium: ["Oil Paint", "Canvas"]
        },
        {
            name: "Ethereal Dreams",
            slug: "ethereal-dreams",
            category: "Surrealism",
            description: "A dreamlike landscape with floating islands and cascading waterfalls.",
            images: ["https://yjwavrdj2e.ufs.sh/f/XmUnwGwJael6AbJd9fCCnfmjRb3wShLIVPvpuUXgKWiTHDQd"],
            price: 499.99,
            artist: "Sophia Ramirez",
            rating: 4.9,
            numReviews: 32,
            stock: 0,
            isFeatured: false,
            banner: "banner-surreal.jpg",
            dimensions: "30x40 inches",
            medium: ["Acrylic", "Wood Panel"]
        },
        {
            name: "Urban Chaos",
            slug: "urban-chaos",
            category: "Street Art",
            description: "A vibrant and energetic depiction of city life with graffiti influences.",
            images: ["https://yjwavrdj2e.ufs.sh/f/XmUnwGwJael6MvqVUNXsAY0qLRB267pw3WUQivXC4y9zaPrF"],
            price: 199.99,
            artist: "Jason Cole",
            rating: 4.5,
            numReviews: 18,
            stock: 5,
            isFeatured: true,
            banner: "banner-streetart.jpg",
            dimensions: "36x48 inches",
            medium: ["Spray Paint", "Canvas"]
        },
        {
            name: "Silent Reflections",
            slug: "silent-reflections",
            category: "Realism",
            description: "A detailed and lifelike portrait capturing the depth of human emotion.",
            images: ["https://yjwavrdj2e.ufs.sh/f/XmUnwGwJael63yHHzAvksCUoeKdWcQ71ASMiVHBLR4y0YhPj"],
            price: 349.99,
            artist: "Emily Tran",
            rating: 4.7,
            numReviews: 22,
            stock: 3,
            isFeatured: false,
            banner: "banner-realism.jpg",
            dimensions: "20x30 inches",
            medium: ["Charcoal", "Paper"]
        },
        
    ],
};

export default sampleData;