import { CodeEditor } from '@/components/JSEditor'
import React from 'react'

export default function page() {

    const arithmetic = `
    -s-- +, -, *, /-s
    -kSELECT-k name, (age-k + -kheight) -kAS-k total -kFROM-k customers;
    -kSELECT-k name, (age-k - -kheight) -kAS-k total -kFROM-k customers;
    -kSELECT-k name, (age-k * -kheight) -kAS-k total -kFROM-k customers;
    -kSELECT-k name, (age-k / -kheight) -kAS-k total -kFROM-k customers;
    `
    const comparison = `
    -s--equal-s
    -kSELECT-k * -kFROM-k customers -kWHERE-k customer_id = 2;
    -s--less than-s
    -kSELECT-k * -kFROM-k customers -kWHERE-k age < 30;
    -s--greater than-s
    -kSELECT-k * -kFROM-k customers -kWHERE-k age > 8;
    -s--greater than or equal-s
    -kSELECT-k * -kFROM-k customers -kWHERE-k age >= 10;
    -s--less than or equal-s
    -kSELECT-k * -kFROM-k customers -kWHERE-k age <= 10;
    -s--not equal-s
    -kSELECT-k * -kFROM-k customers -kWHERE-k age <> 10;
    -kSELECT-k * -kFROM-k customers -kWHERE-k age != 10;
    `
    const like = `
    -s-- +, -, *, /-s
    -s'A%'   <-->  starts with letter A                         <--> "Apple", "Alex"-s
    -s'%A'   <-->  ends with letter A                           <--> "Banana", "Amanda"-s
    -s'%or%' <-->  contain the sequence "or" in any positio     <--> "World", "Orange"-s
    -s'_r%'  <-->  has "r" in the exact second position         <--> "Group", "Area"-s
    -s'A_%'  <-->  starts with "A" and is at least 2 char long  <--> "AI", "Action"-s
    -s'A__%' <-->  starts with "A" and is at least 3 char long  <--> "Ace", "Animal"-s
    -s'a%o'  <-->  starts with "a" and ends with "o"            <--> "Avocado", "Audio"-s

    -sLIKE is case sensitive where ILIKE case insensitive-s

    -kSELEC-k address -kFROM-k customers -kWHERE-k address -kILIKE-k '%la%';
    `
    const others = `
    -s--AND & OR-s
    -kSELECT-k * -kFROM-k customers
    -kWHERE-k (height <= 4) -kAND-k (address = 'Ireland' -kOR-k age <= 30);

    -s--IN & NOT IN-s
    -kSELECT-k * -kFROM-k customers
    -kWHERE-k address -kIN-k ('Ireland', 'Bangladesh');
    -kSELECT-k * -kFROM-k customers
    -kWHERE-k address -kNOT IN-k ('Ireland', 'Bangladesh');

    -s--SUB QUERY ✔✔✔ (very important) -s
    -kSELECT-k * -kFROM-k customers
    -kWHERE-k customer_id -kIN-k (-kSELECT DISTINCT-k(customer_id) -kFROM-k orders);

    -s--NULL, return if the value is NULL-s
    -kSELECT-k * -kFROM-k customers -kAS-k c
    -kFULL OUTER JOIN-k orders -kAS-k o
    -kON-k c.customer_id = o.customer_id
    -kWHERE-k o.order_id -kIS NULL-k;

    -s--BETWEEN-s
    -kSELECT-k * FROM -kcustomers-k
    -kWHERE-k age -kBETWEEN-k 5 -kAND-k 9;
    `

    return (
        <div>
            <h1 className='h1 text-center'>SQL Operators</h1>
            <h2 className='h2'>AEITHMETIC QUERIES</h2>
            <div className='code'>
                <pre className='pre p1'>
                    <code dangerouslySetInnerHTML={{ __html: CodeEditor(arithmetic) }}></code>
                </pre>
            </div>
            <h2 className='h2'>COMPARISON QUERIES</h2>
            <div className='code'>
                <pre className='pre p1'>
                    <code dangerouslySetInnerHTML={{ __html: CodeEditor(comparison) }}></code>
                </pre>
            </div>
            <h2 className='h2'>LIKE QUERIES</h2>
            <div className='code'>
                <pre className='pre p1'>
                    <code dangerouslySetInnerHTML={{ __html: CodeEditor(like) }}></code>
                </pre>
            </div>
            <h2 className='h2'>OTHERS QUERIES</h2>
            <div className='code'>
                <pre className='pre p1'>
                    <code dangerouslySetInnerHTML={{ __html: CodeEditor(others) }}></code>
                </pre>
            </div>
        </div>
    )
}
