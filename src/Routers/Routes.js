import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import Id from "../Pages/Id";
import Doctor from "../Pages/Doctor";
import Calender from "../Pages/Calender";
import EnquireID from "../Pages/EnquireID";
import BookingDate from "../Pages/BookingDate";

export default function AppRoutes({setBook,organizationName,fetchUser,user,clinics,doctors,doctorRealtions,selectClinic,selectDoctor,selectedDocAndClinin,books}) {
  return (
      <Routes>
        <Route path="/" element={<Home organizationName={organizationName} />} />
        <Route path="/reservation_id" element={<Id fetchUser={fetchUser} />} />
        <Route path="/Booking_dates" element={<BookingDate user={user} books={books} />} />
        <Route path="/enquire_id" element={<EnquireID fetchUser={fetchUser}  />} />
        <Route path="/reservation_doc" element={<Doctor selectedDocAndClinin={selectedDocAndClinin} clinics={clinics} doctors={doctors} user={user} doctorRealtions={doctorRealtions}/>} />
        <Route path="/reservation_cal" element={<Calender user={user} selectDoctor={selectDoctor}  books={books} selectClinic={selectClinic} setBook={setBook} />} /> 
      </Routes>
  );
}
