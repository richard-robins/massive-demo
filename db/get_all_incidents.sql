SELECT incidents.id, incidents.us_state, injuries.name, affected_areas.name, causes.name
FROM incidents
JOIN injuries
  ON incidents.injury_id = injuries.id
JOIN affected_areas
  ON injuries.affected_area_id = affected_areas.id
JOIN causes
  ON causes.id = incidents.cause_id;
