import React from 'react';
import { useAuth } from '../hooks/useAuth';
import classes from './dashboard.module.css';
import { Link } from 'react-router-dom';
export default function Dashboard() {
  const { user ,logout} = useAuth();

  return (
    <div className={classes.container}>
      <div className={classes.menu}>
        {allItems
          .filter(item => user.isAdmin || !item.forAdmin)
          .map(item => (
            <Link
              key={item.title}
              to={item.url}
              style={{
                backgroundColor: item.bgColor,
                color: item.color,
              }}
            >
              <img src={item.imageUrl} alt={item.title} />
              <h2>{item.title}</h2>
            </Link>
          ))}
          <a onClick={logout}>Logout</a>
      </div>
    </div>
  );
}

const allItems = [
  {
    title: 'Orders',
    imageUrl: '/icons/orders.svg',
    url: '/orders',
    bgColor: 'orange',
    color: 'white',
  },
  {
    title: 'Profile',
    imageUrl: '/icons/profile.svg',
    url: '/profile',
    bgColor: 'orange',
    color: 'white',
  },
  {
    title: 'Users',
    imageUrl: '/icons/users.svg',
    url: '/admin/users',
    forAdmin: true,
    bgColor: 'orange',
    color: 'white',
  },
  {
    title: 'Foods',
    imageUrl: '/icons/foods.svg',
    url: '/admin/foods',
    forAdmin: true,
    bgColor: 'orange',
    color: 'white',
  },
  
];