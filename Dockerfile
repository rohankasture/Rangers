# Use an official Python runtime as a parent image
FROM python:3.6.8-alpine3.8

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip3 install --trusted-host pypi.python.org -r requirements.txt

# Make port 5001 available to the world outside this container
EXPOSE 5001


# Run app.py when the container launches
CMD ["python", "notify_user.py"]

