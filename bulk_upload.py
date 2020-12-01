#!/usr/bin/python

import sqlite3


conn = sqlite3.connect('center.db')
file = open('notes.txt', 'r')
lines = file.readlines()

for i, q in enumerate(lines):
    conn.execute(f"INSERT INTO questions (ID, question) \
                 VALUES ({i}, '{q}')")
conn.commit()

cursor = conn.execute("SELECT ID, question FROM questions")
[print(row) for row in cursor]

conn.close()
