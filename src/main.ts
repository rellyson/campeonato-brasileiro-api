import { createExpressApp } from './http/server';

const bootstrap = () => {
    const port = process.env.PORT || '3000';
    const app = createExpressApp(port);

    app.listen(port, () => {
        console.log(`Server is ready to accept connections at port ${port}`);
    });
}

bootstrap();