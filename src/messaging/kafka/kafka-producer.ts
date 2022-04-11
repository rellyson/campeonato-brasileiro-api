import { Kafka, Message } from "kafkajs";

export interface ProduceMessage {
    topic: string
    messages: Message[]
}

export class KafkaProducer {
    constructor(private client: Kafka) { }

    async produce(data: ProduceMessage) {
        try {
            const producer = this.client.producer()
            await producer.connect()

            await producer.send({
                topic: data.topic,
                messages: data.messages
            })

            await producer.disconnect()
        } catch(err) {
            console.log(`An error occurred when producing message: ${err}`)
            throw err
        }
    }
}
