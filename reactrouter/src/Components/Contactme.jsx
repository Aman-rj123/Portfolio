import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, TextField, Button } from '@mui/material';
import { Email, Phone } from '@mui/icons-material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const contentType = response.headers.get('content-type');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            if (contentType && contentType.includes('application/json')) {
                const data = await response.json();
                console.log('Response Data (JSON):', data);
                toast.success(data.message || "Message sent successfully!");
            } else {
                const text = await response.text(); // Handle plain text response
                console.log('Response Text:', text);
                toast.success(text || "Message sent successfully!");
            }
        } catch (error) {
            console.error('Error sending message:', error);
            toast.error("Failed to send message.");
        }
    };

    return (
        <Container maxWidth="md" style={{ marginTop: '50px', backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '8px' }}>
            <Card elevation={3} style={{ backgroundColor: '#2c2c2c', padding: '20px', marginBottom: '40px', color: '#ff4d4d' }}>
                <CardContent>
                    <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '10px', color: '#ff4d4d' }}>
                        Contact Me
                    </Typography>
                    <Typography variant="body1" style={{ marginBottom: '20px', color: '#ff4d4d' }}>
                        I am currently looking for job opportunities in the software field. Feel free to reach out to me with any inquiries or opportunities!
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Phone style={{ color: '#ff4d4d', marginRight: '10px' }} />
                            <Typography variant="body1" style={{ display: 'inline-block', color: '#ff4d4d' }}>
                                Phone: +91-8252531775
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Email style={{ color: '#ff4d4d', marginRight: '10px' }} />
                            <Typography variant="body1" style={{ display: 'inline-block', color: '#ff4d4d' }}>
                                Email: amanraj840984@gmail.com
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            <Card elevation={3} style={{ padding: '30px', backgroundColor: '#2c2c2c', color: '#ff4d4d' }}>
                <Typography variant="h5" style={{ fontWeight: 'bold', marginBottom: '20px', color: '#ff4d4d' }}>
                    Send a Message
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                name="name"
                                label="Your Name"
                                fullWidth
                                required
                                variant="outlined"
                                value={formData.name}
                                onChange={handleChange}
                                InputLabelProps={{ style: { color: '#ff4d4d' } }}
                                InputProps={{
                                    style: {
                                        backgroundColor: '#1a1a1a',
                                        borderRadius: '5px',
                                        color: '#ff4d4d'
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="email"
                                label="Your Email"
                                fullWidth
                                required
                                type="email"
                                variant="outlined"
                                value={formData.email}
                                onChange={handleChange}
                                InputLabelProps={{ style: { color: '#ff4d4d' } }}
                                InputProps={{
                                    style: {
                                        backgroundColor: '#1a1a1a',
                                        borderRadius: '5px',
                                        color: '#ff4d4d'
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="message"
                                label="Your Message"
                                multiline
                                rows={4}
                                fullWidth
                                required
                                variant="outlined"
                                value={formData.message}
                                onChange={handleChange}
                                InputLabelProps={{ style: { color: '#ff4d4d' } }}
                                InputProps={{
                                    style: {
                                        backgroundColor: '#1a1a1a',
                                        borderRadius: '5px',
                                        color: '#ff4d4d'
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                style={{
                                    padding: '10px 0',
                                    fontSize: '16px',
                                    backgroundColor: '#ff4d4d',
                                    color: '#ffffff',
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
                                }}
                            >
                                Send Message
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Card>

            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </Container>
    );
}

export default Contact;
