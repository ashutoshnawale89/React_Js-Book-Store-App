import "./AddBook.css";
import React from 'react'
import { Link, Navigate , useNavigate } from "react-router-dom";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AddBookService from '../services/BookService';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { Button } from '@mui/material';


export default function AddBook() {

    const navigate = useNavigate();
    const [date, setDate] = React.useState(null);

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

  
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    let [bookDetails, setBookDetails] = useState({
        bookName: "",
        authorName: "",
        bookDescription: "",
        price: "",
        quantity: "",
        bookImg:"",
    });

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setBookDetails({ ...bookDetails,
            [name]: value,
         
        });
        console.log(bookDetails);
    };
    

    const addBook = (event) => {
        event.preventDefault();
        let bookData = {
            bookName: bookDetails.bookName,
            authorName: bookDetails.authorName,
            bookDescription: bookDetails.bookDescription,
            price: bookDetails.price,
            quantity: bookDetails.quantity,
            bookImg:bookDetails.bookImg,
            
        };

        AddBookService.addBook(bookData).then((response) => {
            console.log("created" + response);
            alert("Book Added successfully...");
            navigate("/dashboard");
        }).catch((response) => {
            alert(response.response.data.data);
        });

    };

    return (
        <div>
            <div className="form-content">
            <form action="#" className="form" onSubmit={addBook} >
                <div className="form-head">
                    <h3 className="head-text">ADD BOOKS SERVICE</h3>
                    <div className="cancel-button" >
                        <a href="/dashboard"><ClearOutlinedIcon color='error' /></a>
                    </div>
                </div>

                <div className="row-content">
                    <TextField
                        style={{ margin: '10px' }}
                        className="input-reg"
                        type="text"
                        id="fname"
                        name="bookName"
                        placeholder="Enter book name"
                        value={bookDetails.bookName}
                        onChange={handleInput}
                        label="Book Name"
                        required
                    />
                </div>

                <div className="row-content">
                    <TextField
                        style={{ margin: '10px' }}
                        className="input-reg"
                        type="text"
                        id="fname"
                        name="authorName"
                        placeholder="Enter Author Name"
                        value={bookDetails.authorName}
                        onChange={handleInput}
                        label="Author Name"
                        required
                    />
                </div>

               
                <div className="row-content">
                    <TextField
                        style={{ margin: '10px' }}
                        className="input-reg"
                        type="text"
                        id="fname"
                        name="bookDescription"
                        placeholder="Book Description"
                        value={bookDetails.bookDescription}
                        onChange={handleInput}
                        label="Book Description"
                        required
                    />
                </div>
               
                <div className="row-content">
                    <TextField
                        style={{ margin: '10px' }}
                        className="input-reg"
                        type="text"
                        name="price"
                        id="phone"
                        placeholder="Price"
                        label="Book Price"
                        required
                        value={bookDetails.price}
                        onChange={handleInput}
                    />
                </div>

                <div className="row-content">
                    <TextField
                        style={{ margin: '10px' }}
                        className="input-reg"
                        type="text"
                        name="quantity"
                        id="phone"
                        placeholder="Quantity"
                        label="Quantity No's "
                        required
                        value={bookDetails.quantity}
                        onChange={handleInput}
                    />
                </div>

                <div className="row-content">
                    <TextField
                        style={{ margin: '10px' }}
                        className="input-reg"
                        type="text"
                        name="bookImg"
                        id="bookImg"
                        placeholder="Book Image"
                        label="Book Image Link"
                        required
                        value={bookDetails.bookImg}
                        onChange={handleInput}
                    />
                </div>

                <div className="button">
                    <Button variant='contained' size='medium' color='inherit' type="submit" className="button" id="button"  >Add Book </Button>
                </div>

                <div className="link">
                    <Link to="/dashboard" className="link"> Click here to Dashboard</Link>
                </div >

            </form>
        </div>

        </div>
    )
}
