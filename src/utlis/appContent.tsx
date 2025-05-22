export const specialtiesData = [
  {
    id: '1',
    title: 'Dermatologist',
    description: 'Expert in skin, hair, and nails.',
  },
  {
    id: '2',
    title: 'Cardiologist',
    description: 'Specialist in heart and blood vessel disorders.',
  },
  {
    id: '3',
    title: 'Orthopedic Surgeon',
    description: 'Expert in musculoskeletal system issues.',
  },
  {
    id: '4',
    title: 'Neurologist',
    description: 'Specialist in disorders of the nervous system.',
  },
  {
    id: '5',
    title: 'Pediatrician',
    description: 'Doctor specializing in children’s health.',
  },
  {
    id: '6',
    title: 'Ophthalmologist',
    description: 'Expert in eye care, including surgery.',
  },
  {
    id: '7',
    title: 'Endocrinologist',
    description: 'Specialist in hormone-related disorders.',
  },
  {
    id: '8',
    title: 'Gastroenterologist',
    description: 'Expert in digestive system disorders.',
  },
  {
    id: '9',
    title: 'Psychiatrist',
    description: 'Specialist in mental health and emotional disorders.',
  },
  {
    id: '10',
    title: 'Urologist',
    description: 'Expert in urinary tract and male reproductive health.',
  },
];

export const doctorsData = [
  {
    id: '1',
    name: 'Dr. Sarah Thompson',
    speciality: '1',
    phone: '123-456-7890',
    email: 'sarah.thompson@medikart.com',
    createdAt: '2024-11-04T13:52:45.554Z',
    updatedAt: '2024-11-05T08:44:38.951Z',
    image:
      'https://www.google.com/imgres?q=doctor%20girls&imgurl=https%3A%2F%2Flookaside.instagram.com%2Fseo%2Fgoogle_widget%2Fcrawler%2F%3Fmedia_id%3D3068522738275831977&imgrefurl=https%3A%2F%2Fwww.instagram.com%2Fp%2FCqVlSw4I9Cp%2F&docid=_Dd8_rjyfrBHiM&tbnid=Wr5VsoyHYZ7jFM&vet=12ahUKEwi1qInpy5uNAxXHR2wGHf8MIUQQM3oECGMQAA..i&w=1057&h=1057&hcb=2&ved=2ahUKEwi1qInpy5uNAxXHR2wGHf8MIUQQM3oECGMQAA',
    rating: '4.5',
    fees: '1500',
  },
  {
    id: '2',
    name: 'Dr. John Smith',
    speciality: '2',
    phone: '234-567-8901',
    email: 'john.smith@medikart.com',
    createdAt: '2024-11-04T13:55:12.221Z',
    updatedAt: '2024-11-05T08:49:10.307Z',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    rating: '4.5',
    fees: '1500',
  },
  {
    id: '3',
    name: 'Dr. Emily Davis',
    speciality: '3',
    phone: '345-678-9012',
    email: 'emily.davis@medikart.com',
    createdAt: '2024-11-04T14:01:07.110Z',
    updatedAt: '2024-11-05T08:52:29.412Z',
    image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg',
    rating: '5.5',
    fees: '1500',
  },
  {
    id: '4',
    name: 'Dr. Michael Lee',
    speciality: '4',
    phone: '456-789-0123',
    email: 'michael.lee@medikart.com',
    createdAt: '2024-11-04T14:08:33.985Z',
    updatedAt: '2024-11-05T08:55:44.906Z',
    image: 'https://images.pexels.com/photos/3279199/pexels-photo-3279199.jpeg',
    rating: '3.6',
    fees: '1500',
  },
  {
    id: '5',
    name: 'Dr. Olivia Brown',
    speciality: '5',
    phone: '567-890-1234',
    email: 'olivia.brown@medikart.com',
    createdAt: '2024-11-04T14:15:20.667Z',
    updatedAt: '2024-11-05T08:58:17.288Z',
    image: 'https://images.pexels.com/photos/3845762/pexels-photo-3845762.jpeg',
    rating: '5',
    fees: '1500',
  },
];

export const appointmentData = [
  {
    id: '1',
    slot: {
      date: '2025-02-27',
      time: '11:00',
      reminder: '15',
    },
    patient: {
      name: 'Rahul',
      phoneNumber: '7766091283',
      age: 22,
    },
    doctor: '1', // doctor ID
    user: '1', // user who booked the appointment
    status: 'PENDING',
  },
];

export const userData = [
  {
    id: '1',
    name: 'Pradeep',
    image: '',
    email: '',
    dob: '',
    phoneNumber: '9998887770',
    age: 0,
    callerId: 'test-user-1',
    roles: ['USER', 'ADMIN'],
  },
  {
    id: '2',
    name: 'Dr. Sarah',
    image: '9876543210',
    email: 'sarah.thompson@gmail.com',
    dob: '',
    phoneNumber: '',
    age: 0,
    callerId: '',
    roles: [],
  },
];
