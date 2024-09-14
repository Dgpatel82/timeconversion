import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

function TimezoneList({ timezones, selectedTime, setTimezones }) {
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(timezones);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTimezones(items);
  };

  const removeTimezone = (value) => {
    setTimezones(timezones.filter((tz) => tz.value !== value));
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="timezones">
        {(provided) => (
          <DroppableContainer {...provided.droppableProps} ref={provided.innerRef}>
            {timezones.map((timezone, index) => (
              <Draggable key={timezone.value} draggableId={timezone.value} index={index}>
                {(provided) => (
                  <DraggableItem
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TimezoneInfo>
                      {timezone.label} - {selectedTime.toLocaleString('en-US', { timeZone: timezone.value })}
                    </TimezoneInfo>
                    <RemoveButton onClick={() => removeTimezone(timezone.value)}>Remove</RemoveButton>
                  </DraggableItem>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </DroppableContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
}

// Styled components for the timezone list
const DroppableContainer = styled.div`
  background: #f4f4f4;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

const DraggableItem = styled.div`
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  margin: 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: #f0f0f0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const TimezoneInfo = styled.div`
  font-size: 16px;
  color: #333;
`;

const RemoveButton = styled.button`
  background: #ff5722;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s ease;

  &:hover {
    background: #e64a19;
  }

  &:focus {
    outline: none;
  }
`;

export default TimezoneList;
