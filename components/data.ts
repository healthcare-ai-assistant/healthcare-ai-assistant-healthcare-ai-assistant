
import { TFunction } from '../i18n/LanguageContext';

export const getUpcomingAppointmentsData = (t: TFunction) => [
    { name: 'Sarah Anderson', time: '10:30 AM', type: t('appointmentTypes.clinic') },
    { name: 'John Smith', time: '11:15 AM', type: t('appointmentTypes.online') },
    { name: 'Emma Davis', time: '2:00 PM', type: t('appointmentTypes.home') },
];

export const getRevenueData = (t: TFunction) => [
    { source: t('dashboard.totalEarnings'), amount: '$8,450', percentage: 80, color: 'bg-green-500' },
    { source: t('dashboard.clinicVisits'), amount: '$5,200', percentage: 61, color: 'bg-blue-500' },
    { source: t('dashboard.onlineConsultations'), amount: '$2,100', percentage: 40, color: 'bg-purple-500' },
    { source: t('dashboard.homeVisits'), amount: '$1,150', percentage: 27, color: 'bg-orange-500' },
];

export const getRecentActivityData = (t: TFunction) => [
    {
        icon: 'CalendarIcon',
        name: 'Sarah Anderson',
        action: t('recentActivityActions.bookedAppointment'),
        time: '2 hours ago',
    },
    {
        icon: 'CircleCheckBigIcon',
        name: 'John Smith',
        action: t('recentActivityActions.startedConsultation'),
        time: '4 hours ago',
    },
    {
        icon: 'CircleCheckBigIcon',
        name: 'Emma Davis',
        action: t('recentActivityActions.completedVisit'),
        time: '6 hours ago',
    },
    {
        icon: 'DollarSignIcon',
        name: 'Mike Johnson',
        action: t('recentActivityActions.paymentReceived'),
        time: '1 day ago',
    },
];

export const getManageAppointmentsData = (t: TFunction) => [
    { name: 'Sarah Anderson', type: t('appointmentTypes.clinic'), date: t('appointments.today'), time: '10:30 AM', duration: '30 mins', location: 'Main Clinic, Room 101', status: t('appointments.confirmed') },
    { name: 'John Smith', type: t('appointmentTypes.online'), date: t('appointments.today'), time: '11:15 AM', duration: '30 mins', location: t('appointments.videoCall'), status: t('appointments.confirmed') },
    { name: 'Emma Davis', type: t('appointmentTypes.home'), date: t('appointments.today'), time: '2:00 PM', duration: '45 mins', location: '123 Oak Street, Apt 4B', status: t('appointments.pending') },
    { name: 'Michael Brown', type: t('appointmentTypes.clinic'), date: t('appointments.today'), time: '3:30 PM', duration: '30 mins', location: 'Main Clinic, Room 102', status: t('appointments.confirmed') },
    { name: 'Lisa Wilson', type: t('appointmentTypes.online'), date: t('appointments.tomorrow'), time: '10:00 AM', duration: '30 mins', location: t('appointments.videoCall'), status: t('appointments.confirmed') },
    { name: 'David Miller', type: t('appointmentTypes.clinic'), date: t('appointments.tomorrow'), time: '2:00 PM', duration: '30 mins', location: 'Main Clinic, Room 101', status: t('appointments.confirmed') },
];

export const getBookingRequests_pendingData = (t: TFunction) => [
    {
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rachel",
        name: "Rachel Green",
        type: t('appointmentTypes.clinic'),
        reason: "General checkup and blood pressure monitoring",
        requested: "Tomorrow at 2:00 PM",
        sent: "2 hours ago"
    },
    {
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=tom",
        name: "Tom Hardy",
        type: t('appointmentTypes.online'),
        reason: "Follow-up on medication side effects",
        requested: "Dec 20 at 10:30 AM",
        sent: "4 hours ago"
    },
    {
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=linda",
        name: "Linda Parker",
        type: t('appointmentTypes.home'),
        reason: "Post-surgery follow-up and wound care",
        requested: "Dec 21 at 3:00 PM",
        sent: "6 hours ago"
    },
    {
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus",
        name: "Marcus Johnson",
        type: t('appointmentTypes.clinic'),
        reason: "Physical examination and diabetes management",
        requested: "Dec 22 at 11:00 AM",
        sent: "1 day ago"
    }
];

export const getBookingRequests_acceptedData = (t: TFunction) => [
    {
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=victoria",
        name: "Victoria Stone",
        type: t('appointmentTypes.online'),
        time: "Dec 19 at 4:00 PM"
    },
    {
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=adam",
        name: "Adam Smith",
        type: t('appointmentTypes.clinic'),
        time: "Dec 20 at 9:30 AM"
    }
];


export const getOnlineConsultation_upcomingData = (t: TFunction) => [
    {
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
        name: "Emma Davis",
        time: `${t('onlineConsultation.today')}, 11:30 AM`,
        type: "video" as "video" | "audio"
    },
    {
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jessica",
        name: "Jessica Brown",
        time: `${t('onlineConsultation.today')}, 2:00 PM`,
        type: "audio" as "video" | "audio"
    },
    {
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa",
        name: "Lisa Wong",
        time: `${t('onlineConsultation.tomorrow')}, 10:00 AM`,
        type: "video" as "video" | "audio"
    }
];

export const getOnlineConsultation_pastData = (t: TFunction) => [
    {
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
        name: "Maria Garcia",
        description: "Follow-up consultation completed",
        time: "Yesterday, 3:30 PM",
        duration: "25 mins"
    },
    {
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jennifer",
        name: "Jennifer Lee",
        description: "Initial consultation completed",
        time: "2 days ago",
        duration: "30 mins"
    }
];

export const getHomeVisits_scheduledData = (t: TFunction) => [
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    name: "Michael Brown",
    address: "123 Oak Street, Apt 4B, New York, NY 10001",
    time: "2:00 PM",
    distance: "2.3 km away",
    status: "scheduled"
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    name: "Sarah Wilson",
    address: "456 Maple Avenue, Suite 202, New York, NY 10002",
    time: "3:30 PM",
    distance: "3.1 km away",
    status: "scheduled"
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    name: "David Chen",
    address: "789 Elm Road, Downtown, New York, NY 10003",
    time: "4:45 PM",
    distance: "4.8 km away",
    status: "pending"
  }
];

export const getHomeVisits_completedData = (t: TFunction) => [
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jennifer",
    name: "Jennifer Lee",
    address: "321 Pine Street, Brooklyn, NY 10004",
    completed: "Yesterday"
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=robert",
    name: "Robert Martinez",
    address: "654 Cedar Lane, Queens, NY 10005",
    completed: "2 days ago"
  }
];

export const getConfirmReject_pendingData = (t: TFunction) => [
    {
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=linda",
        name: "Linda Parker",
        reason: "Post-surgery follow-up and wound care",
        date: "Dec 21 at 3:00 PM",
        address: "520 Berry Lane, Manhattan, NY 10006",
        sent: "6 hours ago"
    },
    {
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus",
        name: "Marcus Johnson",
        reason: "Physical examination and diabetes management",
        date: "Dec 22 at 11:00 AM",
        address: "789 Elm Road, Downtown, New York, NY 10003",
        sent: "1 day ago"
    },
    {
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=patricia",
        name: "Patricia Anderson",
        reason: "Routine elderly care and medication review",
        date: "Dec 23 at 2:30 PM",
        address: "654 Walnut Street, Brooklin, NY 10007",
        sent: "1 day ago"
    }
];

export const getConfirmReject_confirmedData = (t: TFunction) => [
    {
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=elena",
        name: "Elena Rodriguez",
        time: "Dec 19 at 4:00 PM",
        address: "321 Pine Street, Brooklyn, NY 10004",
        confirmed: "2 days ago"
    },
    {
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
        name: "James Wilson",
        time: "Dec 20 at 10:30 AM",
        address: "987 Birch Avenue, Queens, NY 10008",
        confirmed: "1 day ago"
    }
];

export const getConfirmReject_rejectedData = (t: TFunction) => [
    {
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=kevin",
        name: "Kevin Thompson",
        reason: "Time slot not available",
        rejectedDate: "Dec 18"
    }
];

export const getPatientHistoryData = (t: TFunction) => [
    {
        id: 1,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
        name: "Sarah Anderson",
        lastVisit: "2 weeks ago",
        totalVisits: 15,
        age: 32,
        bloodType: "O+",
        allergies: "Penicillin",
        heightWeight: "5'10\" / 180 lbs",
        medicalConditions: ["Hypertension", "Diabetes"],
        currentMedications: ["Lisinopril", "Metformin"],
        recentDocs: [
            { name: "Lab Results - Dec 10, 2024" },
            { name: "Previous Consultation - Dec 3, 2024" }
        ]
    },
    {
        id: 2,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
        name: "John Smith",
        lastVisit: "1 week ago",
        totalVisits: 12,
        age: 45,
        bloodType: "A+",
        allergies: "None",
        heightWeight: "5'10\" / 180 lbs",
        medicalConditions: ["Asthma"],
        currentMedications: ["Albuterol", "Fluticasone"],
        recentDocs: [
            { name: "Lab Results - Dec 10, 2024" },
            { name: "Previous Consultation - Dec 3, 2024" }
        ]
    },
    {
        id: 3,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
        name: "Emma Davis",
        lastVisit: "3 days ago",
        totalVisits: 8,
        age: 28,
        bloodType: "B+",
        allergies: "Sulfa drugs",
        heightWeight: "5'10\" / 180 lbs",
        medicalConditions: [],
        currentMedications: ["Birth control"],
        recentDocs: [
            { name: "Lab Results - Dec 10, 2024" },
            { name: "Previous Consultation - Dec 3, 2024" }
        ]
    },
    {
        id: 4,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
        name: "Michael Brown",
        lastVisit: "Today",
        totalVisits: 28,
        age: 56,
        bloodType: "AB+",
        allergies: "Aspirin",
        heightWeight: "5'10\" / 180 lbs",
        medicalConditions: ["Heart disease", "Hypertension", "High cholesterol"],
        currentMedications: ["Atorvastatin", "Lisinopril", "Metoprolol"],
        recentDocs: [
            { name: "Lab Results - Dec 10, 2024" },
            { name: "Previous Consultation - Dec 3, 2024" }
        ]
    }
];


export const getFollowUp_scheduledData = (t: TFunction) => [
    {
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
        name: "Sarah Anderson",
        reason: "Hypertension Check",
        date: "Dec 25, 2024",
        time: "10:30 AM",
        originalVisit: "Dec 11, 2024",
        pricing: "Free",
        pricingColor: "green"
    },
    {
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
        name: "John Smith",
        reason: "Asthma Assessment",
        date: "Dec 26, 2024",
        time: "2:00 PM",
        originalVisit: "Dec 12, 2024",
        pricing: "50% Discount",
        pricingColor: "blue"
    },
    {
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
        name: "Michael Brown",
        reason: "Heart Disease Management",
        date: "Dec 27, 2024",
        time: "11:00 AM",
        originalVisit: "Dec 13, 2024",
        pricing: "Free",
        pricingColor: "green"
    },
    {
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa",
        name: "Lisa Wilson",
        reason: "Post-Surgery Check",
        date: "Dec 29, 2024",
        time: "3:30 PM",
        originalVisit: "Dec 15, 2024",
        pricing: "30% Discount",
        pricingColor: "blue"
    },
];

export const getFollowUp_completedData = (t: TFunction) => [
    {
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
        name: "Emma Davis",
        reason: "Follow-up: General Health",
        date: "Dec 18, 2024",
        time: "1:00 PM",
        pricing: "Free",
        pricingColor: "green"
    },
    {
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
        name: "David Chen",
        reason: "Follow-up: Medication Review",
        date: "Dec 17, 2024",
        time: "10:00 AM",
        pricing: "50% Discount",
        pricingColor: "blue"
    }
];

export const getSubscriptionPlans = (t: TFunction) => ({
  basic: {
    title: t('subscription.basic.title'),
    description: t('subscription.basic.description'),
    price: 49,
    features: [
      t('subscription.basic.feature1'),
      t('subscription.basic.feature2'),
      t('subscription.basic.feature3'),
      t('subscription.basic.feature4'),
      t('subscription.basic.feature5'),
    ],
  },
  premium: {
    title: t('subscription.premium.title'),
    description: t('subscription.premium.description'),
    price: 99,
    features: [
      t('subscription.premium.feature1'),
      t('subscription.premium.feature2'),
      t('subscription.premium.feature3'),
      t('subscription.premium.feature4'),
      t('subscription.premium.feature5'),
      t('subscription.premium.feature6'),
      t('subscription.premium.feature7'),
    ],
    isCurrent: true,
    isFeatured: true,
  },
  enterprise: {
    title: t('subscription.enterprise.title'),
    description: t('subscription.enterprise.description'),
    price: 199,
    features: [
      t('subscription.enterprise.feature1'),
      t('subscription.enterprise.feature2'),
      t('subscription.enterprise.feature3'),
      t('subscription.enterprise.feature4'),
      t('subscription.enterprise.feature5'),
      t('subscription.enterprise.feature6'),
      t('subscription.enterprise.feature7'),
      t('subscription.enterprise.feature8'),
      t('subscription.enterprise.feature9'),
    ],
  },
});
