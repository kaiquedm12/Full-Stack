import express from 'express';
import cors from 'cors';
import moongose from 'mongoose';

class App {
public app: express.Application;

public constructor() {
  this.app = express();
  this.app.use(cors());
  this.initMongoose();
  this.connectToDatabase();
}

private initMongoose(): void {
  moongose.set('runValidators', true);
}

private connectToDatabase(): void {
  moongose.connect('mongodb+srv://KaiqueDM:demetrio08@kaiquedm.ax4e7tq.mongodb.net/?retryWrites=true&w=majority&appName=KaiqueDM', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

public listen(port: number): void {
  this.app.listen(port, () => {
    console.log(`Aplicação iniciada na porta: ${port}`);
  });
}
}

export default App;
