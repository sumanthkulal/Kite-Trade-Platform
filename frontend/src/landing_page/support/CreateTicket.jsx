import React from 'react';
import { Container, Row, Col, Accordion, ListGroup } from 'react-bootstrap';

const ZerodhaHelpLayout = () => {
  const accordionItems = [
    { title: 'Account Opening', icon: '+', eventKey: '0' ,subTopics: [
      { text: 'Resident individual', link: '/help/aadhar-pan' },
      { text: 'Non Resident Indian (NRI)', link: '/help/kyc-verification' },
      { text: 'Company, Partnership, HUF and LLP', link: '/help/troubleshooting' },
      { text: 'Glossary', link: '/help/kyc-verification' }
      
    ]},
    { title: 'Your Zerodha Account', icon: '👤', eventKey: '1' ,subTopics: [
      { text: 'Your Profile', link: '/help/aadhar-pan' },
      { text: 'Account modification', link: '/help/kyc-verification' },
      { text: 'Client Master Report (CMR) and Depository Participant (DP)', link: '/help/troubleshooting' },
      { text: 'Nomination', link: '/help/kyc-verification' },
      { text: 'Transfer and conversion of securities', link: '/help/kyc-verification' }
      
    ] },
    { title: 'Kite', icon: '🪁', eventKey: '2' ,subTopics: [
      { text: 'IPO', link: '/help/aadhar-pan' },
      { text: 'Margin Trading Facility (MTF) and Margins', link: '/help/kyc-verification' },
      { text: 'Charts and orders', link: '/help/troubleshooting' },
      { text: 'Alerts and Nudges', link: '/help/kyc-verification' },
      { text: 'General', link: '/help/kyc-verification' }
      
    ] },
    { title: 'Funds', icon: '₹', eventKey: '3' ,subTopics: [
      { text: 'Add money', link: '/help/aadhar-pan' },
      { text: 'Withdraw money', link: '/help/kyc-verification' },
      { text: 'Add bank accounts', link: '/help/troubleshooting' },
      { text: 'eMandates', link: '/help/kyc-verification' },
      
    ]},
    { title: 'Console', icon: '©️', eventKey: '4',subTopics: [
      { text: 'Portfolio', link: '/help/aadhar-pan' },
      { text: 'Corporate actions', link: '/help/kyc-verification' },
      { text: 'Funds statement', link: '/help/troubleshooting' },
      { text: 'Reports', link: '/help/kyc-verification' },
      { text: 'Profile', link: '/help/kyc-verification' },
       { text: 'Segments', link: '/help/kyc-verification' }
      
    ] },
    { title: 'Coin', icon: '💿', eventKey: '5',subTopics: [
      { text: 'Mutual funds', link: '/help/aadhar-pan' },
      { text: 'National Pension Scheme (NPS)', link: '/help/kyc-verification' },
      { text: 'Features on Coin', link: '/help/troubleshooting' },
      { text: 'Payments and Orders', link: '/help/kyc-verification' },
      { text: 'General', link: '/help/kyc-verification' }
      
    ] },
  ];

  const currentLinks = [
    // Added this link for the image resemblance
    { text: 'Latest Intraday leverages and Square-off timings', href: '#' }, 
    { text: 'Current Buybacks - November 2025', href: '#' },
  ];

  const quickLinks = [
    { text: 'Track account opening', href: '#' },
    { text: 'Track segment activation', href: '#' },
    { text: 'Intraday margins', href: '#' },
    { text: 'Kite user manual', href: '#' },
    { text: 'Learn how to create a ticket', href: '#' },
  ];

  return (
    <Container className="my-5">
      <Row>
        <Col md={8}>
          {/* Main Accordion Wrapper - Correction applied in previous step */}
          <Accordion defaultActiveKey="0" flush>
            {accordionItems.map((item) => (
              <Accordion.Item 
                key={item.eventKey} 
                eventKey={item.eventKey} 
                className="mb-2 shadow-sm"
              >
                <Accordion.Header>
                  <div className="d-flex align-items-center">
                    <span 
                      className="p-2 me-3 border border-secondary rounded-circle text-primary"
                      style={{ width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                      {item.icon}
                    </span>
                    <span className="fw-bold">{item.title}</span>
                  </div>
                </Accordion.Header>

               <Accordion.Body>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    {item.subTopics?.map((sub, index) => (
                      <li key={index} style={{ marginBottom: '8px' }}>
                        <a
                          href={sub.link}
                          style={{
                            textDecoration: "none",
                            color: "#0d6efd", // blue (Bootstrap primary)
                          }}
                          onMouseEnter={(e) => (e.target.style.color = "black")}
                          onMouseLeave={(e) => (e.target.style.color = "#0d6efd")}
                        >
                          {sub.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>

        {/* --- Quick Links and Current Links --- */}
        
        <Col md={4} className="ps-md-4">
          
          {/* CURRENT LINKS SECTION - STYLING CORRECTION APPLIED HERE */}
          <div className="mb-4">
            <ListGroup variant="flush">
              {currentLinks.map((link, index) => (
                <ListGroup.Item 
                  key={index} 
                  // Removed 'text-primary' class
                  action 
                  href={link.href} 
                  // Applied custom styling for list item to remove border/padding/color
                  className="list-group-item-action" 
                  style={{ backgroundColor: '#fff9ec', borderLeft: '3px solid orange', padding: '10px 10px 10px 15px', borderBottom: 'none' }}
                >
                  <a 
                    href={link.href} 
                    // Link style: Default Black, Underlined (to match the image)
                    style={{ 
                      color: 'black', 
                      
                    }}
                    // Hover logic: change color to blue on hover, back to black on leave
                    onMouseEnter={(e) => { 
                      e.currentTarget.style.color = '#0d6efd'; // Bootstrap Primary Blue
                    }}
                    onMouseLeave={(e) => { 
                      e.currentTarget.style.color = 'black'; 
                    }}
                  >
                    • {link.text}
                  </a>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>

          <div className="shadow-sm">
            <div className="bg-light fw-bold p-3 border-bottom rounded-top">Quick links</div>
            <ListGroup variant="flush">
              {quickLinks.map((link, index) => (
                <ListGroup.Item key={index} action href={link.href}>
                  <strong>{index + 1}.</strong> {link.text}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ZerodhaHelpLayout;