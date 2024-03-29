import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'
import { DateRangePicker } from 'react-dates'

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}))
    }

    render() {
        return (
            <div>
        <input type = 'text' value = {this.props.filters.text} onChange = {(e) => {
            this.props.dispatch(setTextFilter(e.target.value))
        }}></input>
        <select value = {this.props.filters.sortBy} onChange = {(e) => {
            e.target.value === 'amount' ? this.props.dispatch(sortByAmount()) : this.props.dispatch(sortByDate())
        }}>
            <option value = 'date'>Date</option>
            <option value = 'amount'>Amount</option>
        </select>
        <DateRangePicker
            startDateId="MyDatePicker"
            endDateId="MyDatePicker"
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            showClearDates={true}
        ></DateRangePicker>
    </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const ConnectedExpenseListFilters = connect(mapStateToProps)(ExpenseListFilters)
export {ConnectedExpenseListFilters}