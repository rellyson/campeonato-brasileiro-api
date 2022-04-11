import { MessagingInterface } from "../messaging/interfaces/messaging.interface";

export class MatchService {
    constructor (private messaging: MessagingInterface) { }

    async startMatch(data: any) {
        await this.messaging.produce({
            topic: data.topic,
            messages: data.messages
        })
    }

    async scoreGoal(data: any) {
        await this.messaging.produce({
            topic: data.topic,
            messages: data.messages
        })
    }

    async startInterval(data: any) {
        await this.messaging.produce({
            topic: data.topic,
            messages: data.messages
        })
    }

    async additionalTime(data: any) {
        await this.messaging.produce({
            topic: data.topic,
            messages: data.messages
        })
    }

    async playerSubstitution(data: any) {
        await this.messaging.produce({
            topic: data.topic,
            messages: data.messages
        })
    }

    async playerAdvertence(data: any) {
        await this.messaging.produce({
            topic: data.topic,
            messages: data.messages
        })
    }

    async endMatch(data: any) {
        await this.messaging.produce({
            topic: data.topic,
            messages: data.messages
        })
    }
}
