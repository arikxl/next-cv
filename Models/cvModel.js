import mongoose from 'mongoose';

const cvSchema = new mongoose.Schema(
    {
        id: { type: Number, required: false, unique: true,  },
        name: { type: String, required: false },
        email: { type: String, required: false },
        phone: { type: String, required: false },
        linkedinUrl: { type: String, required: false },
        file: { type: String, required: false },
        rawData: { type: String, required: false },
    },
    {
        timestamps: true
    }
);

const Cv =mongoose.models.Cv || mongoose.model('Cv', cvSchema);

export default Cv;