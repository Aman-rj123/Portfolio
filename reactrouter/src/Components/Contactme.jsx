import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, TextField, Button } from '@mui/material';
import { Email, Phone } from '@mui/icons-material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/contact`, {
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
                toast.success(data.message || "Message sent successfully!");
            } else {
                const text = await response.text();
                toast.success(text || "Message sent successfully!");
            }
        } catch (error) {
            toast.error("Failed to send message.");
        }
    };

    return (
        <Container maxWidth="md" style={{ marginTop: '50px', padding: '20px', borderRadius: '8px', background: 'linear-gradient(135deg, #1f4037, #99f2c8)', color: '#ffffff' }}>
            <Card elevation={3} style={{ backgroundColor: '#2d2d2d', padding: '20px', marginBottom: '40px', color: '#00e676', borderRadius: '8px' }}>
                <CardContent>
                    <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '10px', color: '#00e676' }}>
                        Contact Me
                    </Typography>
                    <Typography variant="body1" style={{ marginBottom: '20px', color: '#ffffff' }}>
                        Feel free to reach out to me for any inquiries or opportunities. Let's connect!
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Phone style={{ color: '#00e676', marginRight: '10px' }} />
                            <Typography variant="body1" style={{ display: 'inline-block', color: '#ffffff' }}>
                                Phone: +91-8252531775
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Email style={{ color: '#00e676', marginRight: '10px' }} />
                            <Typography variant="body1" style={{ display: 'inline-block', color: '#ffffff' }}>
                                Email: amanraj840984@gmail.com
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            <Card elevation={3} style={{ padding: '30px', backgroundColor: '#333333', borderRadius: '8px' }}>
                <Typography variant="h5" style={{ fontWeight: 'bold', marginBottom: '20px', color: '#00e676' }}>
                    Get in Touch
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="name"
                                label="Name"
                                fullWidth
                                required
                                variant="outlined"
                                value={formData.name}
                                onChange={handleChange}
                                InputLabelProps={{ style: { color: '#00e676' } }}
                                InputProps={{
                                    style: {
                                        backgroundColor: '#444444',
                                        borderRadius: '5px',
                                        color: '#ffffff'
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="email"
                                label="Email"
                                fullWidth
                                required
                                type="email"
                                variant="outlined"
                                value={formData.email}
                                onChange={handleChange}
                                InputLabelProps={{ style: { color: '#00e676' } }}
                                InputProps={{
                                    style: {
                                        backgroundColor: '#444444',
                                        borderRadius: '5px',
                                        color: '#ffffff'
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="subject"
                                label="Subject"
                                fullWidth
                                required
                                variant="outlined"
                                value={formData.subject}
                                onChange={handleChange}
                                InputLabelProps={{ style: { color: '#00e676' } }}
                                InputProps={{
                                    style: {
                                        backgroundColor: '#444444',
                                        borderRadius: '5px',
                                        color: '#ffffff'
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="message"
                                label="Message"
                                multiline
                                rows={4}
                                fullWidth
                                required
                                variant="outlined"
                                value={formData.message}
                                onChange={handleChange}
                                InputLabelProps={{ style: { color: '#00e676' } }}
                                InputProps={{
                                    style: {
                                        backgroundColor: '#444444',
                                        borderRadius: '5px',
                                        color: '#ffffff'
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
                                    backgroundColor: '#00e676',
                                    color: '#ffffff',
                                    borderRadius: '5px',
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
                                }}
                            >
                                Submit
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