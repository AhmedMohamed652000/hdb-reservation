import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routers/Routes';
import MarshalUrl from './API/config';
import Loader from './Pages/Loader';

function App() {
  const [organizationName, setOrganizationName] = useState(null);
  const [doctors, setDoctors] = useState(null);
  const [clinics, setClinics] = useState(null);
  const [books, setBooks] = useState(null);
  const [doctorRealtions, setDoctorRealtions] = useState(null);
  const [user, setUser] = useState(null);
  const [selectDoctor, setSelectDoctor] = useState(null);
  const [selectClinic, setSelectclinic] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const organizationResponse = await MarshalUrl.get('/organization_name');
        setOrganizationName(organizationResponse.data);

        const doctorsResponse = await MarshalUrl.get('/doctors');
        setDoctors(doctorsResponse.data);

        const clinicsResponse = await MarshalUrl.get('/clinics');
        setClinics(clinicsResponse.data);

        const booksResponse = await MarshalUrl.get('/book');
        setBooks(booksResponse.data);
        
        const doctorRealtions = await MarshalUrl.get('/doctorsRelation');
        setDoctorRealtions(doctorRealtions.data);

        setLoading(false); // Data fetching completed, set loading to false
      } catch (error) {
        setLoading(false); // If an error occurs, also set loading to false
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const fetchUser = async (id) => {
    try {
      const fetchUser = await MarshalUrl.get(`/patient/${id}`);
      setUser(fetchUser.data);
      return true
    } catch (error) {
      console.error('Error fetching data:', error);
      return false
    }
  };
  const selectedDocAndClinin = async (doc,clinic) => {
    setSelectDoctor(doc)
    setSelectclinic(clinic)
  }
  const setNewBook =  (books) => {
    setBooks(books)
  }
useEffect(() => {}, [books])
  return (
    <BrowserRouter>
      {loading ? (
        <Loader/>
      ) : (
        <AppRoutes
          organizationName={organizationName}
          doctors={doctors}
          clinics={clinics}
          books={books}
          user={user}
          fetchUser={fetchUser}
          doctorRealtions={doctorRealtions}
          selectedDocAndClinin={selectedDocAndClinin}
          selectClinic={selectClinic}
          selectDoctor={selectDoctor}
          setBooks={setNewBook}
        />
      )}
    </BrowserRouter>
  );
}

export default App;
