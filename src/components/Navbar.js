import React from 'react';
import '@fontsource/changa';
import '@fontsource/poppins';
import { Link, useLocation } from 'react-router-dom';
import logo from '../img/logos.png'; // Ruta correcta al logo

const Navbar = () => {
  const location = useLocation(); // Obtiene la ruta actual

  return (
    <nav style={styles.navbar}>
      {/* Contenedor del logo */}
      <div style={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="El Chel Logo" style={styles.logoImage} />
        </Link>
      </div>

      {/* Contenedor de enlaces */}
      <ul style={styles.navLinks}>
        <li>
          <Link
            to="/sucursales"
            style={{
              ...styles.link,
              ...(location.pathname === '/sucursales' && styles.activeLink),
            }}
          >
            Sucursales
          </Link>
        </li>
        <li>
          <Link
            to="/menu"
            style={{
              ...styles.link,
              ...(location.pathname === '/menu' && styles.activeLink),
            }}
          >
            Menú
          </Link>
        </li>
        <li>
          <Link
            to="/nosotros"
            style={{
              ...styles.link,
              ...(location.pathname === '/nosotros' && styles.activeLink),
            }}
          >
            Nosotros
          </Link>
        </li>
        <li>
          <Link
            to="/contacto"
            style={{
              ...styles.link,
              ...(location.pathname === '/contacto' && styles.activeLink),
            }}
          >
            Facturación
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Distribuye logo y enlaces
    padding: '10px 30px',
    backgroundColor: 'white', // Fondo blanco
    borderBottom: '3px solid #e76f51', // Línea inferior naranja
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    height: '100px', // Tamaño proporcional del logo
    width: 'auto',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '20px', // Espaciado entre enlaces
    justifyContent: 'center', // Centra los enlaces en su contenedor
    flex: 1,
  },
  link: {
    color: 'black', // Letras negras
    textDecoration: 'none',
    fontSize: '18px',
    textTransform: 'uppercase',
    fontFamily: 'Poppins, sans-serif',
    transition: 'color 0.3s, border-bottom 0.3s',
  },
  activeLink: {
    color: '#e76f51', // Color naranja al seleccionarse
    borderBottom: '3px solid #e76f51', // Subrayado naranja
  },
};

export default Navbar;
