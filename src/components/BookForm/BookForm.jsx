import css from './BookForm.module.css'
import Icon from '../Icon'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const schema = yup.object().shape({
    name: yup.string().min(1, 'Name must contain at least 1 letter').required('Email is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    bookingDate: yup.date().required('Date is required'),
    comment: yup.string().optional()
})

const BookForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        console.log('Form Data:', data);
        reset();
        window.location.reload();
    };

    return (
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
            <h3 className={css.formTitle}>Book your camper now</h3>
            <p className={css.formDesc}>Stay connected! We are always ready to help you.</p>

            <div className={css.inputsWrapper}>
            <label>
                    <input type="text" name="name" placeholder="Name" {...register('name')} className={css.input} />
                {errors.name && <span className={css.error}>{errors.name.message}</span>}
            </label>
            
            <label>
                <input type="email" name="email" placeholder="Email" {...register('email')} className={css.input} />
                {errors.email && <span className={css.error}>{errors.email.message}</span>}
            </label>
            
            <label>
                <input type="date" name="bookingDate" placeholder="Booking Date" {...register('bookingDate')} className={css.input} />
                <Icon
                    width={'20'}
                    height={'20'}
                    iconName='calendar'
                    styles={css.calendarIcon}
                />
                {errors.bookingDate && <span className={css.error}>{errors.bookingDate.message}</span>}
            </label>

            <label>
                    <textarea name="comment" placeholder="Leave a comment" {...register('comment')} className={css.comment} />
            </label>
            </div>
            
            <button type="submit" className={css.formBtn}>Send</button>
        </form>
    );
};

export default BookForm;