 const express = require('express');
 router = express.Router();
 
 const db = require('../config/connectionString');
 const reportService = require('../services/report_service');
const { route } = require('../routers/report_router');
const { serve } = require('swagger-ui-express');
// const router = require('../routers/report_router');

 router.get('/', async (req, res) => {
    const reports = await reportService.getAllReport();
    res.send(reports);
 })

 router.get('/:id', async (req, res) => {
   console.log(req);
   const report = await reportService.getReportById(req.params.id);
   if(report.length == 0)
      res.status(404).json('no record with given id : ' + req.params.id);
   else
      res.send(report);
})

router.delete('/:id', async(req, res) => {
   const affectedRows = await reportService.deletedReportId(req.params.id);
   if(affectedRows == 0)
         res.status(404).json('no record with given id : ' + req.params.id)
   else
         res.send('deleted successfully')
})

router.put('/:id', async(req, res) => {
   const affectedRows = await reportService.updatedReportId(req.params.id, req.body);
   if(affectedRows == 0)
      res.status(404).json('no record with given id : ' + req.params.id);
   else
      res.send('updated successfully')
})

router.post('/', async(req, res) => {
   const addRows = await reportService.addReport(req.body);
   if(addRows == 0)
         res.status(500).json('not insert record with given data');
   else
         res.send('add successfully')
})

module.exports = router;