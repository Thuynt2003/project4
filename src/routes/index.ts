import { lazy } from 'react';

const Attendence = lazy(() => import('../pages/Attendence/Attendence'))
const Students = lazy(() => import('../pages/Students/Student-list'));
const SchoolYears = lazy(() => import('../pages/School-years/School-years'));
const ClassesList = lazy(() => import('../pages/Classes/Classes-list'));
const Teachers = lazy(() => import('../pages/_Teachers/Teachers'));
const NotFound = lazy(() => import('../pages/404page'));
const Acknowledge = lazy(() => import('../pages/Acknowledge/Acknowledge'));
const Evalute = lazy(() => import('../pages/Evaluate/Evaluate'));
const TeachingAssignment = lazy(() => import('../pages/Teaching/TeachingAssignment'));

const coreRoutes = [
  {
    path: '*',
    title: 'NotFound',
    component: NotFound,
  },
  {
    path: '/students',
    title: 'Students',
    component: Students,
  },
  {
    path: '/school-years',
    title: 'School Years',
    component: SchoolYears,
  },
  {
    path: '/classes',
    title: 'Classes',
    component: ClassesList,
  },
  {
    path: '/teachers',
    title: 'Teachers',
    component: Teachers,
  },
  {
    path: '/attendence',
    title: 'Attendence',
    component: Attendence,
  },
  {
    path: '/acknowledge',
    title: 'Acknowledge',
    component: Acknowledge,
  },
  {
    path: '/evaluate',
    title: 'Evaluate',
    component: Evalute,
  },
  {
    path: '/teachingAssignment',
    title: 'Teaching Assignment',
    component: TeachingAssignment,
  },
];

const routes = [...coreRoutes];
export default routes;
