import { CodeEditor } from '@/components/JSEditor'
import Link from 'next/link'
import React from 'react'

export default function page() {

    const create = `
    -s--create database-s
    -kCREATE DATABASE-k my_db;

    -s--create table-s
    -kCREATE TABLE-k customers(
        customer_id -kSERIAL PRIMARY KEY-k,
        first_name -kVARCHAR(100) NOT NULL-k,
        ...
    );
    -kCREATE TABLE-k orders(
        order_id -kSERIAL PRIMARY KEY-k,
        customer_id -kINTEGER-k,
        -kFOREIGN KEY-k (customer_id) -kREFERENCES-k customers(customer_id);
    );
    `
    const alter = `
    -s--add a new column-s
    -kALTER TABLE-k customers -kADD COLUMN-k weight -kINTEGER-k;

    -s--change a column data type-s
    -kALTER TABLE-k customers -kALTER COLUMN-k height -kTYPE FLOAT-k;

    -s--drop a column-s
    -kALTER TABLE-k customers -kDROP COLUMN-k weight;

    -s--change a column name-s
    -kALTER TABLE-k customers -kRENAME COLUMN-k height -kTO-k user_height;

    -s--change the table name-s
    -kALTER TABLE-k orders -kRENAME TO-k my_orders;
    `

    const drop = `
    -s--drop a table-s
    -kDROP TABLE-k orders;


    -s--Forcefully disconnect all other users from the target database-s
    -kSELECT pg_terminate_backend-k(pg_stat_activity.pid)
    -kFROM pg_stat_activity-k
    -kWHERE pg_stat_activity.datname-k = 'my_db' -s--Replace with your DB name-s
    -kAND pid-k <> -kpg_backend_pid-k();
    -s--Drop the database-s
    -kDROP DATABASE-k my_db;
    `

    return (
        <div>
            <h2 className='h2'>CREATE QUERIES</h2>
            <div className='code'>
                <pre className='pre p1'>
                    <code dangerouslySetInnerHTML={{ __html: CodeEditor(create) }}></code>
                </pre>
                <Link className='text-sm text-yellow-500 p-2' href="/sql/dml">go inside</Link>
            </div>

            <h2 className='h2'>ALTER QUERIES</h2>
            <div className='code'>
                <pre className='pre p1'>
                    <code dangerouslySetInnerHTML={{ __html: CodeEditor(alter) }}></code>
                </pre>
                <Link className='text-sm text-yellow-500 p-2' href="/sql/dml">go inside</Link>
            </div>
            <h2 className='h2'>DROP QUERIES</h2>
            <div className='code'>
                <pre className='pre p1'>
                    <code dangerouslySetInnerHTML={{ __html: CodeEditor(drop) }}></code>
                </pre>
                <Link className='text-sm text-yellow-500 p-2' href="/sql/dml">go inside</Link>
            </div>
        </div>
    )
}
