export default {
    mongoUrl: process.env.MONGO_URL || 'mongodb+srv://maxmoller:m@xm0ll3r@cluster0.oeflc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
    port: process.env.PORT || 5050,
    jwtSecret: process.env.JWT_SECRET || '3NHnhT48WuCX'
}