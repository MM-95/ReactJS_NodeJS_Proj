const db = require('../config/connectionString')

const getAllReport = async () => {
    const [records] =  await db.query("SELECT * FROM reports")
    return records;
}

const getReportById = async (id) => {
    const [record] = await db.query("SELECT * FROM reports WHERE Id = ?", [id])
    return record;
}

const deletedReportId = async(id) => {
    const [{affectedRows}] = await db.query("DELETE FROM reports WHERE id = ?", [id])
    return affectedRows;
}

const updatedReportId = async(id, req) => {
    const query = 'UPDATE reports SET Name = ?, Label = ?, ScheduleType = ? WHERE id = ?';
    const values = [req.name, req.label, req.scheduletype, id];

    const [{updatedRows}] = await db.query(query, values);
    return updatedRows;
}

const addReport = async(req) => {
    console.log(req);
    const query = 'INSERT INTO reports(Name, Label, ScheduleType) VALUES (?, ?, ?)';
    const values = [req.name, req.label, req.scheduletype];
    const [{result}] = await db.query(query, values);
    return result;
}


module.exports = {getAllReport, getReportById, deletedReportId, updatedReportId, addReport}