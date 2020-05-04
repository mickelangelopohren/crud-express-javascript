const { expect, request } = require('./helpers');


const validateEvent = (event) => {
  expect(typeof entity).to.be.eql('object');
  expect(typeof event.id).to.be.eql('number');
  expect(typeof event.name).to.be.eql('string');
  expect(typeof event.documentNumber).to.be.eql('string');
  expect(typeof event.documentType).to.be.eql('string');
};

describe('Http routes', () => {
  let createdEventId = null;
  let createdEventName = null;
  let createdEventPresentationDate = null;

  describe('POST /events', () => {
    it('should return a new created event', async () => {
      const response = await request.post('/events').send({
        name: 'Evento de Teste',
        presentationDate: '2020-05-04 14:00:00',
      });

      expect(response.status).to.be.eql(200);
      validateEvent(response.body);
      createdEventId = response.body.id;
      createdEventName = response.body.name;
      createdEventPresentationDate = response.body.presentation_date;
    });
  });

  describe('GET /events', () => {
    it('should get all events', async () => {
      const response = await request.get('/events');
      expect(response.status).to.be.eql(200);
      expect(typeof response.body).to.be.eql('object');
    });
  });
});
