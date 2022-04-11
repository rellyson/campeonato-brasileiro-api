export interface ProduceMessage {
    topic: string
    messages: Array<any>
}


export interface MessagingInterface {
    produce(data: ProduceMessage): Promise<any>
}