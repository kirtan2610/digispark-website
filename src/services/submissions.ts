import { db } from '../config/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

interface ConsultationSubmission {
  date: Date;
  time: string;
  phoneNumber: string;
  submittedAt: Date;
}

interface ContactSubmission {
  name: string;
  email: string;
  message: string;
  submittedAt: Date;
}

interface CareerSubmission {
  name: string;
  email: string;
  position: string;
  resume: string;
  submittedAt: Date;
}

export const submitConsultation = async (data: ConsultationSubmission) => {
  try {
    const docRef = await addDoc(collection(db, 'consultations'), {
      ...data,
      submittedAt: Timestamp.fromDate(new Date())
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting consultation:', error);
    return { success: false, error };
  }
};

export const submitContact = async (data: ContactSubmission) => {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...data,
      submittedAt: Timestamp.fromDate(new Date())
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact:', error);
    return { success: false, error };
  }
};

export const submitCareer = async (data: CareerSubmission) => {
  try {
    const docRef = await addDoc(collection(db, 'careers'), {
      ...data,
      submittedAt: Timestamp.fromDate(new Date())
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting career:', error);
    return { success: false, error };
  }
}; 